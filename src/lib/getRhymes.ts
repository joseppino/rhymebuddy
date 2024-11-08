import { PUBLIC_RHYME_API_KEY } from "$env/static/public";

export default async function(word: string) {
  const res = await fetch(`https://api.api-ninjas.com/v1/rhyme?word=${word}`, {
    method: "GET",
    headers: {
      "x-api-key": PUBLIC_RHYME_API_KEY
    }
  });
  const rhymes = await res.json();
  return rhymes;
}