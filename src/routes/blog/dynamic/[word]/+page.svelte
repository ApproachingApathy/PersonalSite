<script lang="ts">
    import type { PageData } from "./$types"
    export let data: PageData;
 
    let {word} = data
 </script>
 
 <h1>{word}</h1>