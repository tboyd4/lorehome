<script lang="ts">
	import { initializeApp } from 'firebase/app';
	import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
	import { variables } from '$lib/variables';
	import { fireUserStore } from '$lib/stores/user.store';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	const firebaseConfig = {
		apiKey: variables.firebaseAPIKey,
		authDomain: variables.firebaseAuthDomain,
		projectId: variables.firebaseProjectID,
		storageBucket: variables.firebaseStorageBucket,
		messagingSenderId: variables.firebaseMessagingSenderID,
		appId: variables.firebaseAppID
	};

	const initSignIn = () => {
		const provider = new GoogleAuthProvider();
		const auth = getAuth();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log('user', user);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	const initSignOut = () => {
		const auth = getAuth();
		auth.signOut();
	};

	onMount(() => {
		initializeApp(firebaseConfig);
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				console.log('user in listener', user);
				fireUserStore.setUser(user);
			} else {
				console.log('logging out');
				fireUserStore.clearUser();
			}
		});
	});
</script>

<div id="Header" class="w-full h-fit py-4 px-2 flex flex-row">
	<button
		class="font-light ml-auto mr-4 p-3 rounded text-white border-white transition-all ease-in-out duration-200 hover:bg-white hover:bg-opacity-25 active:bg-opacity-40"
		on:click={() => {
			goto('/');
		}}>Home</button
	>
	{#if !$fireUserStore.user}
		<button
			class="font-light mx-4 p-3 rounded border text-white border-white transition-all ease-in-out duration-200 hover:bg-white hover:bg-opacity-25 active:bg-opacity-40"
			on:click={() => {
				initSignIn();
			}}>Log In</button
		>
	{:else}
		<button
			class="font-light mx-4 p-3 rounded text-white border-white transition-all ease-in-out duration-200 hover:bg-white hover:bg-opacity-25 active:bg-opacity-40"
			on:click={() => {
				goto('/my-campaign');
			}}>My Campaign</button
		>
		<button
			class="font-light mx-4 p-3 rounded text-white border-white transition-all ease-in-out duration-200 hover:bg-white hover:bg-opacity-25 active:bg-opacity-40"
			on:click={() => {
				goto('/dm-admin');
			}}>DM Admin Dash</button
		>
		<button
			class="font-light mx-4 p-3 rounded border text-white border-white transition-all ease-in-out duration-200 hover:bg-white hover:bg-opacity-25 active:bg-opacity-40"
			on:click={() => {
				initSignOut();
			}}>Log Out</button
		>
	{/if}
</div>

<div id="PageContent">
	<div id="BodyContent">
		<slot />
	</div>
	<div id="Footer" />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	#PageContent {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(body) {
		background: hsla(328, 75%, 45%, 1);

		background: linear-gradient(45deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);

		background: -moz-linear-gradient(45deg, hsla(328, 75%, 45%, 1) 0%, hsla(269, 85%, 41%, 1) 100%);

		background: -webkit-linear-gradient(
			45deg,
			hsla(328, 75%, 45%, 1) 0%,
			hsla(269, 85%, 41%, 1) 100%
		);
	}

	:global(h1, h2, h3, h4, h5, p, a, button) {
		font-family: 'League Spartan', sans-serif;
	}
</style>
