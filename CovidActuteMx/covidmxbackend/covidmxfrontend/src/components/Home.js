import React from "react";
import GeneralReminderCard from "./AssessmentScreen/GeneralReminderCard";
import NewPatientForm from "./AssessmentScreen/NewPatientForm";
import AssessmentSection from "./AssessmentScreen/AssessmentSection";
import Container from "react-bootstrap/Container";



const Home = () => {
    return(
<Container>

        <GeneralReminderCard/>
        <Container>
        <NewPatientForm/>
        <AssessmentSection/>
        </Container>

</Container>
    )
}

export default Home