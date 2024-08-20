export const slideMenu = [
    {
        label: "Home",
        to: "/",
    }, {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "/details",
                children: [
                    {
                        label: "location",
                        to: "location",
                        children: [
                            {
                                label: "City",
                                to: "city",
                                children: [
                                    {
                                        label: "last-value",
                                        to: ''
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "Setting",
        to: "/setting",
        children: [
            {
                label: "Account",
                to: "account"
            },
            {
                label: "Security",
                to: "security",
                children: [
                    {
                        label: "Login",
                        to: "login"
                    }, {
                        label: "Register",
                        to: "register",
                        children: [
                            {
                                label: "Last value",
                                to: ''
                            }
                        ]
                    }
                ]

            }
        ]
    },
]

export default slideMenu