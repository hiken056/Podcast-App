import { create, sendReVerificationToken, verifyEmail } from "#/contollers/user";
import { validate } from "#/middleware/validator";
import { CreateUserSchema, emailVerificationBody } from "#/utils/validationSchema";
import { verify } from "crypto";
import { Router } from "express";

const router = Router();

router.post("/create", validate(CreateUserSchema), create);
router.post("/verify-email", validate(emailVerificationBody), verifyEmail);
router.post("/re-verify-email",sendReVerificationToken);

export default router;
// 