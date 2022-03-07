<script lang="ts">
	import InfoCard from '$lib/components/InfoCard.svelte';
</script>

<section id="HomePage" class="px-12 sm:px-52">
	<br />
	<br />
	<br />
	<br />
	<br />
	<br />
	<h1 class="text-white font-medium text-6xl">Welcome to Lore Home.</h1>
	<br />
	<h3 class="text-white font-thin text-2xl">
		The home for your Dungeons and Dragons Campagin Lore and Session notes.
	</h3>
	<br />
	<br />
	<br />
	<div class="w-full">
		<InfoCard>
			<p class="text-secondary font-light text-4xl">
				Consolidate your session notes and lore into one place, where your entire play group can
				access!
			</p>
		</InfoCard>
	</div>
	<br />
	<br />
	<br />
	<div class="flex flex-col sm:flex-row">
		<div class="sm:mr-3">
			<InfoCard>
				<p class="text-secondary font-light text-3xl">
					As a Dungeon Master, you can upload notes, lore, and charactor or npc details, and they
					will be available in a concise and beatuiful way for your players!
				</p>
			</InfoCard>
		</div>
		<br />
		<div class="sm:ml-3">
			<InfoCard>
				<p class="text-secondary font-light text-3xl">
					As a Player, keep your self up to date on the lore your DM has provided, and review the
					last session notes so you can come prepared and ready to play to your next session.
				</p>
			</InfoCard>
		</div>
	</div>
</section>
