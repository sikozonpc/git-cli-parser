/**
 * Status code:
 * M = modified,
 * A = added,
 * D = deleted,
 * R = renamed,
 * C = copied,
 * ?? = untracked
 * staged_something
 */
module.exports = {
  A: 'added',
  M: 'modified',
  MM: 'staged_modified',
  AM: 'added_modified',
  AD: 'staged_deleted',
  UU: 'conflicted',
  R: 'renamed',
  '??': 'untracked',
  '!!': 'ignored',
  D: 'deleted',
  C: 'copied',
  // Dont know for sure these ones
  UPDATED_UNMERGED: 'U'
}
