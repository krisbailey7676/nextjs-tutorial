import React from "react";

interface Props {
  params: { id: number }; // route parameters
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return <div>UserDetailPage {id}</div>;
};

export default UserDetailPage;
