import React from "react";
import {
  Card,
  CardTitle,
  CardGroup,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const MyEventCards = (props) => {
  return (
		<>
			<CardGroup>
				<Card>
					<CardBody>
						<CardTitle>
							Event Title :{' '}
							{props.data ? props.data.title : 'OrganizerName'}
						</CardTitle>
						<CardSubtitle>
							Catagory :{' '}
							{props.data ? props.data.category : '0.0'}
						</CardSubtitle>
						<CardSubtitle>
							Price :
							{props.data ? props.data.price : 'OrganizerName'}
						</CardSubtitle>
						<CardSubtitle>
							Location :
							{props.data
								? props.data.location
								: 'Props Catagory'}
						</CardSubtitle>
						<CardSubtitle>
							Organizer's Name :{' '}
							{props.data
								? props.data.organizer_name
								: 'Location Empty'}
						</CardSubtitle>
						<CardSubtitle>
							Addressed to :{' '}
							{props.data
								? props.data.addressed_to
								: 'AddressNotFound'}
						</CardSubtitle>
						<CardSubtitle>
							Topic:{' '}
							{props.data ? props.data.topic : 'TopicNotFound'}
						</CardSubtitle>
					</CardBody>
				</Card>
			</CardGroup>
		</>
  );
};

export default MyEventCards;
