export const truncateAndEllipses = (text: string, limit: number): string => {
  if (text?.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

/**
 * Function to capitalize string
 * @param str The string to be capitalized
 * @returns Capitalized string
 */
export const capitalize = (str: string) => {
  return str
    .split(" ") // split the string by spaces into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // capitalize first letter of each word
    .join(" "); // join the array of words back into a string
};

export function convertDateFormat(dateString: string): string {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

// const dateString = "2025-02-12T07:36:37.231Z";
// console.log(convertDateFormat(dateString)); // Output: "02/12/2025"

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const formatDateToISO = (date: Date | string | undefined): string => {
  if (!date) return "";
  const d = new Date(date);
  // Format to 'YYYY-MM-DDTHH:MM'
  return d.toISOString().slice(0, 16);
};

// Helper function to format numbers as "2K", "2.6K", "1M", etc.
export const formatFigures = (value: number): string => {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  }
  return value.toString();
};

export const customTheme = {
  palette: {
    fills: ["#1d1d41", "#8462F6", "#46C2E8", "#FF8833", "#00A0DD"], // Custom fills
    strokes: ["#1d1d41", "#8462F6", "#46C2E8", "#FF8833", "#00A0DD"], // Custom strokes
  },
  overrides: {
    common: {
      title: {
        color: "#fff", // Custom title color
      },
      subtitle: {
        color: "#fff", // Custom subtitle color
      },
    },
    cartesian: {
      background: {
        fill: "#1d1d41", // Custom background color
      },
      axis: {
        line: {
          stroke: "#4A4A4A", // Custom axis line color
        },
        label: {
          color: "#fff", // Custom axis label color
        },
      },
      legend: {
        item: {
          marker: {
            shape: "circle", // Ensure legends are round
            size: 10, // Custom marker size
          },
          label: {
            color: "#fff", // Custom legend label color
          },
        },
      },
    },
  },
  params: {
    foregroundColor: "#fff", // Custom foreground color
    backgroundColor: "#1d1d41", // Custom background color
    accentColor: "#8462F6", // Custom accent color
    chromeBackgroundColor: "#1d1d41", // Custom chrome background color
    chromeTextColor: "#fff", // Custom chrome text color
    fontFamily: "Arial, sans-serif", // Custom font family
    fontSize: 14, // Custom font size
  },
};
