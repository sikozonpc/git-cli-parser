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
  ADDED: 'A  ',
  MODIFIED: 'M ',
  STAGED_MODIFIED: 'MM ',
  ADDED_MODIFIED: 'AM ',
  STAGED_DELETED: 'AD',
  CONFLICTED: 'UU',
  RENAMED: 'R',
  UNTRACKED: '?? ',
  IGNORED: '!! ',
  DELETED: 'D',
  COPIED: 'C',
  // Dont know for sure these ones
  UPDATED_UNMERGED: 'U'
}
