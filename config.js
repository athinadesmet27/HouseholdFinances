/* ============================================================
   THE HOUSEHOLD LEDGER — your private settings
   ------------------------------------------------------------
   This is the ONLY file you edit with your keys. When you update
   the app later, you only replace index.html — never this file —
   so your keys stay put and you never paste them again.
   ============================================================ */

window.LEDGER_CONFIG = {
  // 1. Paste your Supabase Project URL between the quotes:
  supabaseUrl: "https://yjlljuwierbcblifgxxt.supabase.co",

  // 2. Paste your Supabase publishable (anon) key between the quotes:
  supabaseKey: "sb_publishable_aOe5OvSpnK0l_Dpdz0SWvQ_0fF4kf8D",

  // 3. The default household used when the URL has no ?home= value.
  //    For you and Grant, leave this as-is. (Your bookmarks can also
  //    just use the plain URL — it falls back to this.)
  defaultHousehold: "athina-grant",

  // 4. Supabase table name — leave as "ledger" unless you renamed it.
  table: "ledger",
};
