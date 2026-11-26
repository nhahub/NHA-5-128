const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);


app.get("/api/menu", async (req, res) => {
  let query = supabase.from("products").select("*").order("id");
  if (req.query.category) query = query.eq("category", req.query.category);
  const { data, error } = await query;
  if (error) return res.status(500).json({ message: error.message });
  res.json(data);
});


app.get("/api/menu/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("products").select("*").eq("id", req.params.id).single();
  if (error || !data) return res.status(404).json({ message: "Not found" });
  res.json(data);
});


app.post("/api/menu", async (req, res) => {
  const { data, error } = await supabase
    .from("products").insert({ id: Date.now() % 2000000000, ...req.body }).select().single();
  if (error) return res.status(500).json({ message: error.message });
  res.status(201).json(data);
});

app.put("/api/menu/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("products").update(req.body).eq("id", req.params.id).select().single();
  if (error) return res.status(404).json({ message: "Not found" });
  res.json(data);
});


app.delete("/api/menu/:id", async (req, res) => {
  const { error } = await supabase.from("products").delete().eq("id", req.params.id);
  if (error) return res.status(500).json({ message: error.message });
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("API running on http://localhost:5000"));