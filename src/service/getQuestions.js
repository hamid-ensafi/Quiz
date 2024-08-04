import supabase from "./supabase";

async function getQuestion() {
  let { data: questions, error } = await supabase.from("questions").select("*");
  if (error) {
    throw new Error("get questions has problem ");
  }
  return questions;
}
export default getQuestion;
