import React, { FC, useState } from "react";

// Mui
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useProfileForm } from "@/lib/formik.hooks";
import { userProfileUpdate } from "@/redux/users/users.services";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import LoadingButton from "@mui/lab/LoadingButton";

// type
export type IUser = {
  about: null | string;
  answersCount: number;
  birth: null | string;
  blogsCount: number;
  city: null | string;
  country: null | string;
  created_at: string;
  email: string;
  first_name: null | string;
  gender: number;
  id: number;
  is_banned: number;
  is_verified: number;
  last_name: null | string;
  phone: null | string;
  profile: null | string;
  questionsCount: number;
  reputation: number;
  role_id: number;
  updated_at: string;
  username: string;
};

type IProfileCardProps = {
  user: IUser;
};

const ProfileCard: FC<IProfileCardProps> = ({ user }) => {
  // hooks
  const { t } = useTranslation();
  const userData = getCookie("user");

  const userFromCookie = userData ? JSON.stringify(userData) : null;

  // state
  const [loading, setLoading] = useState(false);

  // handler
  const submitHandler = async (values: any) => {
    setLoading(true);
    const data = await userProfileUpdate({
      user: userFromCookie,
      body: values,
      userId: user.id,
    });

    if (data.code === 200) {
      toast.success("update profile successfully");
      setLoading(false);
    }
  };

  // formik
  const { values, handleSubmit, handleChange } = useProfileForm(
    submitHandler,
    user
  );

  return (
    <Grid
      container
      justifyContent="space-between"
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          my: 2,
          p: 2,
        }}
      >
        <Avatar sx={{ width: 70, height: 70 }} />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={5.9}
        sx={{ bgcolor: "common.white", p: 2 }}
        alignItems="center"
      >
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("username")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            fullWidth
            value={values.username}
            disabled
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("email")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            fullWidth
            value={values.email}
            disabled
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("phone")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            name="phone"
            fullWidth
            value={values.phone}
            onChange={handleChange}
            // disabled
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("first_name")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            name="first_name"
            fullWidth
            value={values.first_name}
            // disabled
            onChange={handleChange}
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("last_name")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            name="last_name"
            fullWidth
            value={values.last_name}
            onChange={handleChange}
            // disabled
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("gender")}:
          </Typography>
        </Grid>
        {/* Todo Radio button */}
        <Grid item xs={12} sx={{ mt: 1 }}>
          <FormControl>
            <RadioGroup
              name="gender"
              defaultValue={values.gender}
              onChange={handleChange}
              row
              sx={{ fontSize: 12 }}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={t("female")}
              />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label={t("male")}
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={5.9}
        sx={{ bgcolor: "common.white", p: 2 }}
        alignItems="center"
      >
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("country")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            name="country"
            fullWidth
            value={values.country}
            onChange={handleChange}
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("city")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            name="city"
            fullWidth
            value={values.city}
            onChange={handleChange}
            // disabled
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("birth")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            fullWidth
            value={values.birth}
            name="birth"
            onChange={handleChange}
            // disabled
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>

        <Grid
          item
          xs={2}
          sx={{
            display: "flex",
            gap: 1,
            mt: 1,
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="grey.900">
            {t("about")}:
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <Input
            name="about"
            fullWidth
            value={values.about}
            onChange={handleChange}
            // disabled
            rows={4.2}
            multiline
            sx={{ color: "common.black", bgcolor: "grey.300", px: 1 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: 2,
            ".Mui-disabled": { bgcolor: "grey.800" },
          }}
        >
          <LoadingButton
            variant="contained"
            type="submit"
            fullWidth
            loading={loading}
            sx={{
              color: "common.white",
            }}
          >
            {t("submit")}
          </LoadingButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileCard;
