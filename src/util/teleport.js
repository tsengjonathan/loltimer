import _ from 'lodash';

function isTeleport(spell) {
  return _.get(spell, 'name', '') === 'Teleport';
}

function calculateTeleportCooldown(level) {
  const baseCooldown = 430.588;
  const perLevelChange = 10.588;
  return baseCooldown - level * perLevelChange;
}

export {
  isTeleport,
  calculateTeleportCooldown
}