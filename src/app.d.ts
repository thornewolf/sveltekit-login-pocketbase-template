// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
import type PocketBase from "pocketbase";

declare namespace App {
	// interface Error {}
	// interface PageData {}
	// interface Platform {}
}

declare global {
	declare namespace App {
		// interface Error {}
		interface PageData { user: PocketBase.AuthModel }
		// interface Platform {}
		interface Locals {
			pb: PocketBase
			user: PocketBase.AuthModel
		}
	}
}