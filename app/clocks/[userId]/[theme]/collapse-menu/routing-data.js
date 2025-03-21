
export function routingDataArray(id) {
  return [
    {
      title: "Logout",
      url: `/cold-login/revoke-token`,
    },
    {
      title: "Create Account",
      url: `/clocks/${id}/create-account`,
    },
    {
      title: "Themes",
      url: `/clocks/${id}/theme`,
    },
  ];
}
