import { useAuthStore, authClient } from "~/stores/auth-store";

// this plugin is required so that when you refresh the page
// the app does not forget that the user is authenticated already

export async function authChecker() {
  const authStore = useAuthStore();

  // check better-auth's session status for an existing token
  try {
    const { data: session } = await authClient.getSession();

    if (session?.user) {
      // if user object is returned, they are considered authenticated
      authStore.setAuth(true, session.user);
      console.log("Auth client initialized: User is authenticated.");
    } else {
      // no user found, so they are not authenticated
      authStore.setAuth(false, null);
      console.log("Auth client initialized: User is NOT authenticated.");
    }
  } catch (err) {
    console.error("Error initializing auth client:", err);
    authStore.setAuth(false, null);
  }
}
