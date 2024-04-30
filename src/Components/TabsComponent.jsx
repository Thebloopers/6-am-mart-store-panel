import React, { useState } from 'react';
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { Tab } from '@mui/material';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabsComponent({placeholder}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabConfigs = [
    { label: "Default", lang: "default" },
    { label: "English(EN)", lang: "en" },
    { label: "Arabic - العربية(AR)", lang: "ar" }
  ];

  return (
   
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabConfigs.map((tab, index) => (
              <Tab key={index} label={tab.label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        {tabConfigs.map((tab, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-12">
                <div className="p-4 rounded-lg">
                  <h2 className="text-sm font-bold mb-2">Title ({tab.label})</h2>
                  <div className="form-group">
                    <input
                      type="text"
                      name="title[]"
                      id={`${tab.lang}_title`}
                      className="form-control bg-white border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                      maxLength="100"
                      placeholder={placeholder?placeholder: "Ex:New Flash Sale"}
                    />
                  </div>
                  <input type="hidden" name="lang[]" value={tab.lang} />
                </div>
              </div>
            </div>
          </CustomTabPanel>
        ))}
      </Box>
 
  );
}

export default TabsComponent;
