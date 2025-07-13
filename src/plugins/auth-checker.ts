import { useAuthStore, authClient } from "~/stores/auth-store";
import { createPinia } from "pinia";

// this function is required so that when you refresh the page
// the app does not forget that the user is authenticated already

// initialize Pinia and the Auth store outside of the main function
// so they can be accessed by the authChecker
const pinia = createPinia();
const authStore = useAuthStore(pinia);

export async function authChecker() {
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

// Export the initialized pinia instance
export { pinia };
