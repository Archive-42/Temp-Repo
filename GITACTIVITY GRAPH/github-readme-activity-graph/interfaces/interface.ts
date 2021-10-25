export interface query {
  query: string;
  variables: {
    LOGIN: string;
  };
}

export interface colors {
  areaColor: string;
  bgColor: string;
  borderColor: string;
  color: string;
  lineColor: string;
  pointColor: string;
}

export interface queryOption {
  username: string;
  hide_title?: boolean;
  custom_title?: string;
  colors: colors;
  area: boolean;
}

export interface ParsedQs {
  username?: string;
  hide_title?: boolean;
  custom_title?: string;
  bg_color?: string;
  hide_border?: boolean;
  area_color?: string;
  color?: string;
  line?: string;
  point?: string;
  theme?: string;
  area?: boolean;
}

export interface graphArgs {
  height: number;
  width: number;
  colors: colors;
  title: string;
  line: Promise<string>;
}

export interface userDetails {
  contributions: number[];
  name: string;
}

export interface contributionCount {
  contributionCount: number;
}

export interface week {
  contributionDays: contributionCount[];
}

export interface responseOfApi {
  data: {
    user: {
      name: string;
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: week[];
        };
      };
    };
  };
}
