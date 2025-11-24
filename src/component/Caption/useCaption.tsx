import { colors } from "../../styles";
import { CaptionProps } from "./utils";

const useCaption = ({ isError, isSuccess }: CaptionProps) => {
  const getCaptionConfig = () => {
    const captionConfig = {
      error: { color: colors.error500 },
      success: { color: colors.success500 },
      default: { color: colors.textPrimary },
    };

    if (isError) {
      return captionConfig.error;
    }
    if (isSuccess) {
      return captionConfig.success;
    }

    return captionConfig.default;
  };

  const { color } = getCaptionConfig();

  return {
    color,
  };
};

export default useCaption;
