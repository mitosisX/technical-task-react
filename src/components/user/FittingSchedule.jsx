import { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import MainComponent from "../mainComponent";

import { useSelector } from "react-redux";
import { fetchFittingCalendar } from "../../backend_handler/endpointsController";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { humanizeDate } from "../../utils/date";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const FittingSchedule = () => {
  const { user, token } = useSelector((state) => state);
  const localizer = momentLocalizer(moment);

  const [fittings, setUserFittings] = useState([]);

  useEffect(() => {
    fetchFittings();
  }, []);

  const fetchFittings = async () => {
    const response = await fetchFittingCalendar(token);
    if (response.status === 200) {
      setUserFittings(response.data.data);
    }
  };

  const handleSelectEvent = (event) => {
    console.log(event.resource);

    // setSelectedEvent(event); // Store the selected event's details
    // setIsModalVisible(true); // Open the modal
  };

  const events = fittings.map((fitting) => ({
    id: fitting.fitting_id,
    title: `${fitting.fitting_type.toUpperCase()} - ${fitting.customer_name}`,
    start: new Date(fitting.scheduled_date),
    end: new Date(new Date(fitting.scheduled_date).getTime() + 60 * 60 * 1000), // Assume 1-hour duration
    resource: {
      customerName: fitting.customer_name,
      phone: fitting.customer_phone,
      type: fitting.fitting_type,
      date: fitting.status,
      status: humanizeDate(fitting.scheduled_date),
    },
  }));

  return (
    <MainComponent>
      <Layout>
        <Header
          style={{
            backgroundColor: "#1677ff",
            color: "white",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Title level={2} style={{ color: "white" }}>
            Fitting Schedule
          </Title>
        </Header>
        {/* <Content style={{ padding: "20px" }}> */}
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          style={{ height: 500, marginTop: 30, margin: 20 }}
        />
        {/* </Content> */}
      </Layout>
    </MainComponent>
  );
};

export default FittingSchedule;
