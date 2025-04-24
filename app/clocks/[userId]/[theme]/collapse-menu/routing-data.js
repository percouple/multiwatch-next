
export function routingDataArray(id, theme) {
  return [
    {
      title: "Logout",
      url: `/cold-login/revoke-token`,
    },
    {
      title: "Themes",
      url: `/clocks/${id}/${theme}/theme`,
    },
  ];
}
