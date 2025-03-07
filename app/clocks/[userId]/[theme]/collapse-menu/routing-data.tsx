interface RoutingDataItem {
  title: string;
  url: string;
}

export function routingDataArray(id: string) {
  return [
    {
      title: "Login",
      url: `/clocks/${id}/login`,
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
