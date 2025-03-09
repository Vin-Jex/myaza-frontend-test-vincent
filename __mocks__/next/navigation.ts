export const usePathname = jest.fn();
export const useRouter = jest.fn(() => ({
  push: jest.fn(),
  replace: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
}));

export const useSearchParams = jest.fn(() => ({
  get: jest.fn(),
}));

export const useParams = jest.fn(() => ({}));
export const useSelectedLayoutSegments = jest.fn(() => []);
