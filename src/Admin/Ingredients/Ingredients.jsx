import { Create } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import CreateIngredientCategoryForm from "./CreateIngredientCategory";
import { useState } from "react";
import CreateIngredientForm from "./CreateIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import { updateStockOfIngredient } from "../../State/Admin/Ingredients/Action";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Adjust width to 90% for smaller screens
  maxWidth: "400px", // Ensure max width on larger screens
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 4,
};

const Ingredients = () => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");

  const [openIngredientCategory, setOpenIngredientCategory] = useState(false);
  const handleOpenIngredientCategory = () => setOpenIngredientCategory(true);
  const handleCloseIngredientCategory = () => setOpenIngredientCategory(false);

  const [openIngredient, setOpenIngredient] = useState(false);
  const handleOpenIngredient = () => setOpenIngredient(true);
  const handleCloseIngredient = () => setOpenIngredient(false);

  const handleUpdateStocke = (id) => {
    dispatch(updateStockOfIngredient({ id, jwt }));
  };

  return (
    <div className="px-4 md:px-8 py-4">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Card className="mt-4">
            <CardHeader
              title="Ingredients"
              sx={{
                pt: 2,
                alignItems: "center",
                "& .MuiCardHeader-action": { mt: 0.6 },
              }}
              action={
                <IconButton onClick={handleOpenIngredient}>
                  <Create />
                </IconButton>
              }
            />
            <TableContainer className="h-[60vh] md:h-[88vh] overflow-y-auto">
              <Table aria-label="Ingredients Table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Availability</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ingredients.ingredients.map((item, index) => (
                    <TableRow
                      className="cursor-pointer"
                      hover
                      key={item._id}
                      sx={{
                        "&:last-of-type td, &:last-of-type th": { border: 0 },
                      }}
                    >
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.category.name}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleUpdateStocke(item._id)}
                          color={item.inStoke ? "success" : "primary"}
                        >
                          {item.inStoke ? "In Stock" : "Out of Stock"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>

        <Grid item xs={12} lg={4}>
          <Card className="mt-4">
            <CardHeader
              title="Category"
              sx={{
                pt: 2,
                alignItems: "center",
                "& .MuiCardHeader-action": { mt: 0.6 },
              }}
              action={
                <IconButton onClick={handleOpenIngredientCategory}>
                  <Create />
                </IconButton>
              }
            />
            <TableContainer>
              <Table aria-label="Categories Table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ingredients.category?.map((item, index) => (
                    <TableRow
                      className="cursor-pointer"
                      hover
                      key={item._id}
                      sx={{
                        "&:last-of-type td, &:last-of-type th": { border: 0 },
                      }}
                    >
                      <TableCell>{item.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>

      {/* Ingredient Form Modal */}
      <Modal
        open={openIngredient}
        onClose={handleCloseIngredient}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientForm handleClose={handleCloseIngredient} />
        </Box>
      </Modal>

      {/* Ingredient Category Form Modal */}
      <Modal
        open={openIngredientCategory}
        onClose={handleCloseIngredientCategory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientCategoryForm
            handleClose={handleCloseIngredientCategory}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Ingredients;
