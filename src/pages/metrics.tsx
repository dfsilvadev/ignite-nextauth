import { setupAPIClient } from "../services/api";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {
  return (
    <main>
      <h1>Metrics</h1>
    </main>
  );
}

export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  }
);
