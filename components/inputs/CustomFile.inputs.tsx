import { FC, ReactNode, useEffect, useRef, useState } from "react";

// Mui
import { Box, Button, Grow } from "@mui/material";

// Components

// types
type ICustomFileInput = {
  attachment: any;
  setAttachment: any;
  name: string;
  dimensions?: any;
  icon: ReactNode;
  isBanner?: boolean;
  dimY?: {};
  hasImage?: string | boolean | undefined;
};

const CustomFileInput: FC<ICustomFileInput> = ({
  attachment,
  setAttachment,
  name,
  dimensions = { xs: 70, md: 70 },
  icon,
  isBanner = false,
  dimY,
  hasImage = false,
}) => {
  // hooks
  const inputFileRef = useRef<HTMLInputElement>(null);
  const parentRef = useRef<HTMLDivElement>();

  // states
  const [inputFileHovered, setInputFileHovered] = useState(false);
  const [preview, setPreview] = useState<null | string>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (parentRef) setHeight(parentRef.current?.offsetWidth as number);
  }, []);

  const imageChangeHandler = (e: any) => {
    const files = Array.from(e.target.files);
    const [file] = files;
    if (file) {
      setAttachment(file);
    }

    if (files.length === 0) {
      setAttachment();
    }
  };

  useEffect(() => {
    let objectUrl: string;
    // create the preview

    if (attachment) {
      objectUrl = URL.createObjectURL(attachment);
      setPreview(objectUrl);
    } else {
      if (hasImage) {
        setPreview(hasImage as string);
      } else {
        setPreview(null);
      }
    }

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [attachment, hasImage]);

  const hoverEnable = () => {
    setInputFileHovered((prev) => !prev);
  };

  return (
    <Box
      ref={parentRef}
      sx={{
        width: dimensions,
        height: isBanner ? dimY : height,
        position: "relative",
        borderRadius: 100,
        overflow: "hidden",
        bgcolor: preview ? "transparent" : "grey.300",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
      }}
      onMouseEnter={hoverEnable}
      onMouseLeave={hoverEnable}
    >
      {preview ? (
        <Box
          style={{
            position: "absolute",
            width: "98%",
            display: "flex",
          }}
        >
          <img
            src={preview}
            alt=""
            width="100%"
            height="100%"
            style={{ borderRadius: "6px" }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "tableFilter",
          }}
        >
          {icon}
        </Box>
      )}
      <Grow in={inputFileHovered}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0, 0 , 0, 0.3)",
            position: "absolute",
            display: preview ? "none" : "flex",
            alignItems: "center",
            textAlign: "center",
            color: "grey.100",
            justifyContent: "center",
            borderRadius: 2,
          }}
        >
          Upload Picture
        </Box>
      </Grow>
      <Button
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bgcolor: "transparent",
          zIndex: 99,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        component="label"
        onKeyDown={(e) => e.keyCode === 32 && inputFileRef.current?.click()}
      >
        <input
          ref={inputFileRef}
          type="file"
          hidden
          name={name}
          accept="image/*"
          onChange={imageChangeHandler}
        />
      </Button>
    </Box>
  );
};

export default CustomFileInput;
