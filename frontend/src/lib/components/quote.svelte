<script lang="ts">
	let cls: string = 'flex flex-col text-sm sm:text-base';
	export { cls as class };
</script>

<figure class={cls}>
	<blockquote class="font-bold leading-tight">
		&ldquo;<slot />&rdquo;
	</blockquote>
	{#if $$slots.author}
		<figcaption class="italic">- <slot name="author" /></figcaption>
	{/if}
</figure>
