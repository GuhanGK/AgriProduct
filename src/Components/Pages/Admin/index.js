import { Table } from "antd";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import UserDetailsStyle from "./style";

const AdminPanel = () => {
  const [openUserModal, setOpenUserModal] = useState(false);

  const handleCloseModal = () => setOpenUserModal(false);
  const dataSource = [
    {
      key: "1",
      name: "Tomatoe",
      sowing: "2024-04-12",
      survey: "SRN4863",
    },
    {
      key: "2",
      name: "Onion",
      sowing: "2024-04-12",
      survey: "SRN4864",
    },
  ];

  const columns = [
    {
      title: "Crop Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sowing Date",
      dataIndex: "sowing",
      key: "sowing",
    },
    {
      title: "Survey Number",
      dataIndex: "survey",
      key: "survey",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <div className="">
          <Button onClick={() => handleView(record)}>View</Button>
        </div>
      ),
    },
  ];

  const handleView = (record) => {
    setOpenUserModal(!openUserModal);
    console.log("View button clicked for record:", record);
  };

  return (
    <>
      <UserDetailsStyle>
        <div>
          <p>Users</p>
          {/* <div>
            <Table dataSource={dataSource} columns={columns} />
          </div> */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className=""
            >
              <div className="profile_circle_container">
                <div className="profile_circle">
                  <p className="profile_circle_letter">D</p>
                </div>
                <div className="text-left">
                  <p className="userId_name mb-0">demouser@gmail.com</p>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p className="crops_header">Crops:</p>
              <div className="text-left mb-2 w-100 d-flex justify-content-between align-items-center">
                <div>
                    <p className="user_crops_details mb-0">1. Tomato</p>
                    <span className="span_survey_number">SRN4863</span>
                </div>
                <div className="between_line"></div>
                <div>
                    <p className="user_crops_details mb-0">2024-05-10</p>
                    <span className="span_survey_number">Acre 2</span>
                </div>
              </div>
              <div className="text-left mb-2 w-100 d-flex justify-content-between align-items-center">
                <div>
                    <p className="user_crops_details mb-0">2. Onion</p>
                    <span className="span_survey_number">SRN4863</span>
                </div>
                <div className="between_line"></div>
                <div>
                    <p className="user_crops_details mb-0">2024-05-10</p>
                    <span className="span_survey_number">Acre 1</span>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </UserDetailsStyle>
    </>
  );
};

export default AdminPanel;
