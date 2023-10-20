import React from 'react';
import { useLocation } from 'react-router-dom';
import '../style/userprofile.css'
import shopping from '../asset/shopping.png'

export const UserProfile = () => {
    let location = useLocation().state;
    console.log(location.value)

    return (
        <div className="user-profile" key={location.value.id}>
            <div>
                <img src={location.value.image} alt="userImage" />
                <img src={shopping} alt="cart photo" />
            </div>
            <div className="user-info">
                <p>USER INFORMATION</p>
                <div>
                    <p>FirstName: {location.value.firstName}</p>
                    <p>LastName: {location.value.lastName}</p>
                    <p>MaidName: {location.value.maidenName}</p>
                    <p>Age: {location.value.ageName}</p>
                </div>
            </div>

            <div className="address-info">
                <p>Address Information</p>
                <div>
                    <p>Address: {location.value.address.address}</p> 
                    <p>City: {location.value.address.city}</p>
                    <p>Postal Code: {location.value.address.postalCode}</p>
                    <p>State: {location.value.address.state}</p>
                </div>
            </div>
            <div className="additional-info">
                <p>Cardexpire: {location.value.cardExpire}</p>
                <p>CardNumber: {location.value.cardNumber}</p>
                <p>CardType: {location.value.cardType}</p>
                <p>Currency: {location.value.currency}</p>
                <p>iban: {location.value.iban}</p>
                <p>BirthDate: {location.value.birthDate}</p>
                <p>BloodGroup: {location.value.bloodGroup}</p>
                <p>Domain: {location.value.domain}</p>
                <p>Ein: {location.value.ein}</p>
                <p>Email: {location.value.email}</p>
                <p>Mac Address: {location.value.macAddress}</p>
                <p>Password: {location.value.password}</p>
                <p>Phone: {location.value.phone}</p>
                <p>SSN: {location.value.ssn}</p>
            </div>
        </div>
    );
};
