
export function routingDataArray(id, theme) {
  return [
    {
      title: "Logout",
      url: `/cold-login/revoke-token`,
    },
    {
      title: "Create Account",
      url: `/create-account`,
    },
    {
      title: "Themes",
      url: `/clocks/${id}/${theme}/theme`,
    },
  ];
}
