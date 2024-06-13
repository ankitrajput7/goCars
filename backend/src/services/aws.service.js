import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../confings/aws.config.js";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function putLogoImageObject(fileName, contentType) {
  try {
    const command = new PutObjectCommand({
      Bucket: "go-cars2",
      Key: `admin-upload/${fileName}`,
      ContentType: contentType,
      ACL: "public-read",
    });

    const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
    return url;
  } catch (error) {
    return error;
  }
}

export async function getLogoImageObject(key) {
  try {
    const command = new GetObjectCommand({
      Bucket: "go-cars2",
      Key: key,
    });

    const url = await getSignedUrl(s3Client, command);

    return url;
  } catch (error) {
    return error;
  }
}
