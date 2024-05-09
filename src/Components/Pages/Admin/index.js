import { Table, Tabs } from "antd";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UserDetailsModal from "./UserDetailsModal";

const AdminPanel = () => {
  const [openUserModal, setOpenUserModal] = useState(false);

  const handleCloseModal = () => setOpenUserModal(false);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      email: "mike@gmail.com",
      number: "98362974822",
    },
    {
      key: "2",
      name: "John",
      email: "john@gmail.com",
      number: "76398267302",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email ID",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => handleView(record)}>View</Button>
      ),
    },
  ];

  const handleView = (record) => {
    setOpenUserModal(!openUserModal);
    console.log("View button clicked for record:", record);
  };

  return (
    <>
      <div>
        <p>Users</p>
        <div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
      <Modal
        show={openUserModal}
        onHide={handleCloseModal}
        centered
        className="selected_crop_modal"
      >
        <UserDetailsModal />
      </Modal>
    </>
  );
};

export default AdminPanel;
