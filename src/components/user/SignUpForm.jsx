import {
	Form,
	FormGroup,
	FormLabel,
	FormControl,
	Container,
	Button,
	FormText,
} from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const SignUpForm = ({ existingUser }) => {
	const [user, setUser] = useState({
		username: "",
		EmailAddress: "",
		password: "",
		confirmPassword: "",
	});

	//event handler to handle sign up from submit evnt
	const submitForm = (e) => {
		e.preventDefault();
		toast.success("congrats you have successfully register!", {
			theme: "dark",
			onClose: () => {
				existingUser();
			},
			autoClose: 3000,
		});
	};

	return (
		<Container className="border border-secondary p-3 mt-3 rounded shadow-lg col-12 col-lg-3 col-sm-9">
			<h2 className="text-center fw-bold fs-2">Sign up to Bikebook</h2>

			<Form onSubmit={submitForm}>
				<p>
					Already have an account?
					<button className="btn btn-link fw-bolder" onClick={existingUser}>
						Log in
					</button>
				</p>

				<FormGroup className="mb-3">
					<FormLabel>Full Name</FormLabel>
					<FormControl
						className="border border-secondary"
						value={user.username}
						onChange={(e) => setUser({ ...user, username: e.target.value })}
						required
					/>
				</FormGroup>

				<FormGroup className="mb-3">
					<FormLabel>Email address</FormLabel>
					<FormControl
						className="border border-secondary"
						value={user.Emailaddress}
						onChange={(e) => setUser({ ...user, EmailAddress: e.target.value })}
						required
					/>
				</FormGroup>

				<FormGroup className="mb-3">
					<FormLabel>New password</FormLabel>
					<FormControl
						className="border border-secondary"
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						required
						pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&]).{8,20}"
					/>
					<FormText>
						Password must be 8 characters, At least one uppercase, one
						lowercase, one digit, and one symbol.
					</FormText>
				</FormGroup>

				<FormGroup className="mb-3 ">
					<FormLabel>Confirm New Password</FormLabel>
					<FormControl
						className="border border-secondary"
						value={user.confirmPassword}
						onChange={(e) =>
							setUser({ ...user, confirmPassword: e.target.value })
						}
						required
					/>
				</FormGroup>

				<Container className="text-center">
					<Button
						className="me-3 w-75 bg-black text-Light border border-secondary fs-5 fw-bold"
						type="submit"
					>
						Sign Up
					</Button>
				</Container>
			</Form>
			{user.password !== user.confirmPassword && (
				<p style={{ color: "red" }}>Confirm password is not matched</p>
			)}
		</Container>
	);
};

export default SignUpForm;
