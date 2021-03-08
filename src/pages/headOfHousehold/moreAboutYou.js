import React from "react";
import MoreAboutYouForm from '../../forms/headOfHouseHold/moreAboutYouForm';

const MoreAboutYou = (props) => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [isOrigin, setOrigin] = React.useState(false);

  const [isPregnent, setIsPregnent] = React.useState(false);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  // const handleOrigin = (value) => {
  //   if (value === "Yes") setOrigin(YES);
  //   else if (value === "No") setOrigin(NO);
  // };

  // const handleIspregnent = (value) => {
  //   if (value === "Yes") setIsPregnent(YES);
  //   else if (value === "No") setIsPregnent(NO);
  // }

  return (
    <div>
      <MoreAboutYouForm />
    </div>
  );
};

export default MoreAboutYou;
