<script lang="ts">
  import getRhymes from "$lib/getRhymes";

  let worksheet: HTMLDivElement;
  let worksheetHTML: string = $state("");
  let worksheetText: string = $state("");
  let enableSuggestions: boolean = $state(false);

</script>

<h1>Rhymebuddy</h1>
<div contenteditable id="text-area" role="textbox" tabindex="0"
onclick={() => {
  console.log("HTML", worksheetHTML);
  console.log("Text", worksheetText);
}}
bind:this={worksheet}
bind:innerHTML={worksheetHTML}
bind:innerText={worksheetText}
onkeydown={(e) => {
  if(e.key === "Tab") {
    e.preventDefault();
  } else if (e.key === "Enter") {
    if(worksheetHTML.includes("</div>")) {
      enableSuggestions = true;
      console.log("suggestions enabled");      
    }
    
  }
}}>
<span>husdds</span></div>

<style>
  #text-area {
    border-bottom: 1px solid var(--colour5);
    box-shadow: 0px 0px 5px var(--colour4);
    border-radius: 2px;
    padding: 5px;
  }

  .suggestion {
    color: var(--colour2);
  }
</style>