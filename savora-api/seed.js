const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

(async () => {
  const items = JSON.parse(fs.readFileSync("./menu.json", "utf8"));
  const { error } = await supabase.from("products").upsert(items);
  if (error) return console.error("Error:", error.message);
  console.log("Uploaded " + items.length + " products");
})();