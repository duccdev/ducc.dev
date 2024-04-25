<script lang="ts">
	import DesktopView from "$lib/components/ui/DesktopView.svelte";
	import MobileView from "$lib/components/ui/MobileView.svelte";
	import GitHubDark from "$lib/components/icons/GitHubDark.svelte";
	import Discord from "$lib/components/icons/Discord.svelte";
	import YouTube from "$lib/components/icons/YouTube.svelte";
	import Link from "$lib/components/ui/Link.svelte";
	import Code from "$lib/components/ui/Code.svelte";

	let discordHovered = false;
	let youtubeHovered = false;
	let githubHovered = false;
</script>

<!-- this could be implemented so much cleaner but im lazy lol -->

<DesktopView>
	<div class="absolute-center w-96">
		<div>
			<div class="flex justify-center mb-4">
				<p class="text-ctp-green text-3xl">Socials</p>
			</div>

			<div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex items-center mb-2"
					on:mouseenter={() => (discordHovered = true)}
					on:mouseleave={() => (discordHovered = false)}
				>
					<div class="relative mr-2.5">
						<div
							class="size-8 rounded-full bg-white flex items-center justify-center"
						>
							<Discord class="size-5" />
						</div>
					</div>

					<Link
						href="https://discord.com/channels/@me/842457844724400142"
						class="text-xl"
					>
						{#if discordHovered}
							<Code>amogustroll69</Code>
						{:else}
							Discord
						{/if}
					</Link>
				</div>
			</div>

			<div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex items-center mb-2"
					on:mouseenter={() => (youtubeHovered = true)}
					on:mouseleave={() => (youtubeHovered = false)}
				>
					<div class="relative mr-2.5">
						<div
							class="size-8 rounded-full bg-white flex items-center justify-center"
						>
							<YouTube class="size-5" />
						</div>
					</div>

					<Link
						href="https://www.youtube.com/channel/UCxHXCBqIsIpb28kzg7oajDg"
						class="text-xl"
					>
						{#if youtubeHovered}
							<div class="flex items-center">
								<Code class="mr-1">amogustroll69</Code>
								<p class="text-lg">(i never post)</p>
							</div>
						{:else}
							YouTube
						{/if}
					</Link>
				</div>
			</div>

			<div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex items-center"
					on:mouseenter={() => (githubHovered = true)}
					on:mouseleave={() => (githubHovered = false)}
				>
					<div class="relative mr-2.5">
						<div
							class="size-8 rounded-full bg-white flex items-center justify-center"
						>
							<GitHubDark class="size-5" />
						</div>
					</div>

					<Link href="https://github.com/duccybaka" class="text-xl">
						{#if githubHovered}
							<Code>duccybaka</Code>
						{:else}
							GitHub
						{/if}
					</Link>
				</div>
			</div>
		</div>
	</div>
</DesktopView>

<MobileView>
	<div class="absolute-center">
		<div>
			<p class="text-ctp-green text-3xl mb-4 flex justify-center">
				Socials
			</p>

			<div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex items-center mb-1"
					on:mouseenter={() => (discordHovered = true)}
					on:mouseleave={() => (discordHovered = false)}
				>
					<div class="relative mr-2.5">
						<div
							class="size-8 rounded-full bg-white flex items-center justify-center"
						>
							<Discord class="size-5" />
						</div>
					</div>

					<Link
						href="https://discord.com/channels/@me/842457844724400142"
						class="text-xl"
					>
						<Code>amogustroll69</Code>
					</Link>
				</div>
			</div>

			<div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div
					class="flex items-center mb-1"
					on:mouseenter={() => (youtubeHovered = true)}
					on:mouseleave={() => (youtubeHovered = false)}
				>
					<div class="relative mr-2.5">
						<div
							class="size-8 rounded-full bg-white flex items-center justify-center"
						>
							<YouTube class="size-5" />
						</div>
					</div>

					<Link
						href="https://www.youtube.com/channel/UCxHXCBqIsIpb28kzg7oajDg"
						class="text-xl"
					>
						<Code class="mr-1">amogustroll69</Code>
					</Link>
				</div>
			</div>

			<div>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="flex items-center">
					<div class="relative mr-2.5">
						<div
							class="size-8 rounded-full bg-white flex items-center justify-center"
						>
							<GitHubDark class="size-5" />
						</div>
					</div>

					<Link href="https://github.com/duccybaka" class="text-xl">
						<Code class="mb-2">duccybaka</Code>
					</Link>
				</div>
			</div>
		</div>
	</div>
</MobileView>
