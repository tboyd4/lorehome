<script lang="ts">
	import { initializeApp } from 'firebase/app';
	import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
	import { variables } from '$lib/variables';
	import { fireUserStore } from '$lib/stores/user.store';
	import { onMount } from 'svelte';

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

<div id="Header" class="w-full h-fit p-2 flex flex-row">
	<button
		class="mr-12"
		on:click={() => {
			initSignIn();
		}}>Log In</button
	>
	<button
		on:click={() => {
			initSignOut();
		}}>Log Out</button
	>
</div>

<div id="PageContent">
	<div id="BodyContent">
		{#if $fireUserStore.user}
			<h1>{$fireUserStore.user.displayName}</h1>
		{/if}
		<slot />
	</div>
	<div id="Footer">
		<p>Hey</p>
	</div>
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
</style>
