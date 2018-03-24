/* eslint-disable import/prefer-default-export */
export function joinInfos(name, mail) {
  if (!name || !mail) return '';
  return [name, mail].join(' / ');
}
