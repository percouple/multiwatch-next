const useRouter = jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    asPath: '',
});

export { useRouter };
