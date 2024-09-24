import { useCallback, useEffect, useState } from "react";
import { useSnack } from "../../providers/SnackbarProvider";
import { useSearchParams } from "react-router-dom";
import { ChangeStatus, getUser, getUsers } from "../../users/services/usersApiService";

export default function useAdminActions() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const setSnack = useSnack();
    const [rows, setRows] = useState([]);
    const [searchParams] = useSearchParams()
    const searchValue = searchParams.get("searchValue")




    const getAllUsers = useCallback(() => {
        setIsLoading(true);
        setTimeout(async () => {
            try {
                setUsers(await getUsers());
                setSnack("success", "Succeed Getting Users");

            } catch (err) {
                setSnack("error", "Failed Getting Users");
            } finally {
                setIsLoading(false);
            }
        }, 1000);
    }, [setSnack]);

    const handleDeleteUser = async (userId) => {
        try {
            let deletedUser = await getUser(userId);
            if (deletedUser.data.isAdmin) {
                setSnack("error", "Can't delete admin");
            } else {
                await deletedUser(userId);
                setSnack(deletedUser.data.isBusiness ? "warning" : "success", `User ${deletedUser.data.isBusiness ? 'Business' : ''} deleted`);
                setRows(prevRows => prevRows.filter(row => row.DeleteUser !== deletedUser.data._id));
            }
        } catch (err) {
            setSnack("error", "User failed to delete");
        }
    };

    const handleChangeStatus = async (userId) => {
        try {
            const updateduser = await ChangeStatus(userId);

            setRows(prevRows =>
                prevRows.map(row =>
                    row.DeleteUser === userId ? {
                        id: row.id,
                        lastName: updateduser.data.name.last,
                        firstName: updateduser.data.name.first,
                        isBusiness: updateduser.data.isBusiness ? "Yes" : "No",
                        isAdmin: updateduser.data.isAdmin ? "Yes" : "No",
                        DeleteUser: updateduser.data._id,
                        ChangeStatus: updateduser.data.isBusiness ? "Demote to Regular" : "Promote to Business",
                    } : row
                )
            );

            setSnack("success", "User updated");
        } catch (err) {
            setSnack("error", "User update failed");
        }
    };

    useEffect(() => {
        const handleSearch = () => {
            if (searchValue) {
                const filteredRows = users.filter(user =>
                    user.name.first.toLowerCase().includes(searchValue.toLowerCase()) ||
                    user.name.last.toLowerCase().includes(searchValue.toLowerCase())
                );
                setRows(filteredRows.map((user, index) => ({
                    id: `${index + 1}`,
                    lastName: user.name.last,
                    firstName: user.name.first,
                    isBusiness: user.isBusiness ? "Yes" : "No",
                    isAdmin: user.isAdmin ? "Yes" : "No",
                    DeleteUser: user._id,
                    ChangeStatus: user.isBusiness ? "Demote to Regular" : "Promote to Business",
                })));
            } else {

                setRows(users.map((user, index) => ({
                    id: `${index + 1}`,
                    lastName: user.name.last,
                    firstName: user.name.first,
                    isBusiness: user.isBusiness ? "Yes" : "No",
                    isAdmin: user.isAdmin ? "Yes" : "No",
                    DeleteUser: user._id,
                    ChangeStatus: user.isBusiness ? "Demote to Regular" : "Promote to Business",
                })));
            }
        };

        handleSearch();
    }, [searchValue, users]);

    return {
        users,
        getAllUsers,
        isLoading,
        handleDeleteUser,
        rows,
        setRows,
        handleChangeStatus,
    };
}
