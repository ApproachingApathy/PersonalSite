<script lang="ts">
	import dayjs from 'dayjs';

	export let title: string;
	export let startDate: Date | undefined = undefined;
	export let endDate: Date | undefined = undefined;
	export let company: string | undefined = undefined;

	// export let company: string;
</script>

<section>
	<div class="mt-3">
		<div>
			<h3 class="text-xl font-medium">{title}</h3>
			{#if company || endDate || startDate}
				<div>
					<em>
						{#if company}
							<span>{company}</span>
							{#if startDate || endDate}
								&middot;
							{/if}
						{/if}
						{#if startDate || endDate}
							<span
								>{startDate?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })} - {endDate
									? endDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
									: 'Present'}</span
							>
						{/if}
					</em>
				</div>
			{/if}
		</div>
		<div class="mt-3 prose dark:prose-invert text-current">
			<slot />
		</div>
	</div>
</section>
