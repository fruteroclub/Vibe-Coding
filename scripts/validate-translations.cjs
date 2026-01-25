#!/usr/bin/env node

/**
 * Script de validación de traducciones i18n
 * Valida que los archivos es/translation.json y en/translation.json tengan:
 * - Mismo número de claves
 * - Misma estructura jerárquica
 * - No falten ni sobren claves
 */

const fs = require('fs');
const path = require('path');

// Colores ANSI para terminal
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
};

function colorize(text, color) {
  return `${color}${text}${colors.reset}`;
}

function log(emoji, message, color = colors.reset) {
  console.log(`${emoji} ${colorize(message, color)}`);
}

function logSection(title) {
  console.log(`\n${colorize(`━━━ ${title} ━━━`, colors.bright)}`);
}

// Cargar archivos de traducción
function loadTranslations() {
  const esPath = path.join(__dirname, '../src/locales/es/translation.json');
  const enPath = path.join(__dirname, '../src/locales/en/translation.json');

  try {
    const esData = JSON.parse(fs.readFileSync(esPath, 'utf8'));
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    return { esData, enData };
  } catch (error) {
    log('❌', `Error al cargar archivos: ${error.message}`, colors.red);
    process.exit(1);
  }
}

// Obtener todas las claves en formato "dot notation"
function getKeys(obj, prefix = '') {
  let keys = [];

  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      keys.push(fullKey);
      keys = keys.concat(getKeys(obj[key], fullKey));
    } else {
      keys.push(fullKey);
    }
  }

  return keys;
}

// Contar claves totales
function countKeys(obj) {
  let count = 0;
  for (const key in obj) {
    count++;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      count += countKeys(obj[key]);
    }
  }
  return count;
}

// Validar traducciones
function validateTranslations() {
  logSection('Validación de Traducciones i18n');

  const { esData, enData } = loadTranslations();

  // Check 1: Contar claves
  const esCount = countKeys(esData);
  const enCount = countKeys(enData);

  logSection('Check 1: Número de claves');
  log('📊', `Español (es): ${esCount} claves`, colors.blue);
  log('📊', `Inglés (en): ${enCount} claves`, colors.blue);

  if (esCount === enCount) {
    log('✅', 'Paridad de claves correcta', colors.green);
  } else {
    log('❌', `Diferencia de ${Math.abs(esCount - enCount)} claves`, colors.red);
    return false;
  }

  // Check 2: Estructura jerárquica
  logSection('Check 2: Estructura jerárquica');
  const esKeys = getKeys(esData).sort();
  const enKeys = getKeys(enData).sort();

  if (esKeys.length !== enKeys.length) {
    log('❌', `Diferente número de claves únicas (es: ${esKeys.length}, en: ${enKeys.length})`, colors.red);
    return false;
  }

  log('📋', `Total de claves únicas: ${esKeys.length}`, colors.blue);

  // Check 3: Claves faltantes o extras
  logSection('Check 3: Validación de claves');

  const missingInEn = esKeys.filter(key => !enKeys.includes(key));
  const missingInEs = enKeys.filter(key => !esKeys.includes(key));

  if (missingInEn.length > 0) {
    log('❌', `Claves faltantes en inglés (${missingInEn.length}):`, colors.red);
    missingInEn.forEach(key => console.log(`   - ${key}`));
    return false;
  }

  if (missingInEs.length > 0) {
    log('❌', `Claves extras en inglés (${missingInEs.length}):`, colors.red);
    missingInEs.forEach(key => console.log(`   - ${key}`));
    return false;
  }

  // Verificar que las claves están en el mismo orden (estructura idéntica)
  let structureMatch = true;
  for (let i = 0; i < esKeys.length; i++) {
    if (esKeys[i] !== enKeys[i]) {
      if (structureMatch) {
        log('⚠️', 'Estructura no idéntica (orden diferente):', colors.yellow);
        structureMatch = false;
      }
      console.log(`   es[${i}]: ${esKeys[i]}`);
      console.log(`   en[${i}]: ${enKeys[i]}`);
    }
  }

  if (structureMatch) {
    log('✅', 'Estructura jerárquica idéntica', colors.green);
  }

  log('✅', 'No hay claves faltantes o extras', colors.green);

  // Resumen final
  logSection('Resumen');
  log('✅', colorize('Todas las validaciones pasaron correctamente', colors.bright + colors.green));
  console.log(`\n${colorize('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', colors.bright)}\n`);

  return true;
}

// Ejecutar validación
const success = validateTranslations();
process.exit(success ? 0 : 1);
