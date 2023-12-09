/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { SwapService } from './swap.service';
import { ethers } from 'ethers';
import { Route } from '@lifi/sdk';

const routesRequest = {
  fromChainId: 137, // polygon
  fromAmount: '1000000000000000000', // 1 MATIC
  fromTokenAddress: '0x0000000000000000000000000000000000001010', // MATIC
  toChainId: 42161, // Arbitrum
  toTokenAddress: '0x561877b6b3DD7651313794e5F2894B2F18bE0766', // MATIC
};

const PRIVATE_KEY = "5060be2ffa4fef30ba74b8a853a72b86f36b053c9b0586be3e3721d23ca188fe";
const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com/");
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

describe('SwapService', () => {
  let service: SwapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SwapService],
    }).compile();

    service = module.get<SwapService>(SwapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRoutes', () => {
    it('should get swap routes', async () => {

      const routes = await service.getRoutes(routesRequest);
      expect(routes.val).toEqual(expect.any(Object));
      expect(routes.error).toBe('');
    });

    it('should handle errors and return null with an error message', async () => {
      const invalidRoutesRequest = {
        fromChainId: 137, // polygon
        fromAmount: '1000000000000000000', // 1
        fromTokenAddress: '0x0000000000000000000000000000000000001010', // ETH
        toChainId: 137, // Arbitrum
        toTokenAddress: '0x561877b6b3DD7651313794e5F2894B2F18bE0766', // USDC
      };

      const result = await service.getRoutes(invalidRoutesRequest);

      expect(result.val).toBeNull();
      expect(result.error).toEqual(expect.any(String));
    });
  });

  describe('executeSwap', () => {

    it('should return the executed route with no error', async () => {
      const route = await service.getRoutes(routesRequest);

      const result = await service.executeSwap(signer, route.val);

      expect(result.val).toEqual(expect.any(Object));
      expect(result.error).toBe("");
    }, 1000000);

    it('should handle invalid signer and return null with an error message', async () => {
      const invalidSigner = new ethers.Wallet(PRIVATE_KEY + "bsjkcbsjcnskcnjs");
      const result = await service.executeSwap(invalidSigner, {} as Route);

      expect(result.val).toBeNull();
      expect(result.error).toEqual(expect.any(String));
    });
  });

  describe('getStatus', () => {
    test('should return the status with no error', async () => {
      const request = { txHash: "0xbceef6bb170aebecce4f302cb06375524a543c9954fc263368eab3dce5deae4c" };

      const result = await service.getStatus(request);

      expect(result.val).toEqual(expect.any(Object));
      expect(result.error).toBe("");
    }, 10000);

    test('should handle errors and return null with an error message', async () => {
      const invalidRequest = { txHash: "0xjbajkbjacbkjcnjkcnjncjjdiwoalkl" };

      const result = await service.getStatus(invalidRequest);

      expect(result.val).toBeNull();
      expect(result.error).toEqual(expect.any(String));
    });
  });

  // describe('resumeSwap', () => {
  //   test('should return the resumed route with no error', async () => {
  //     const signer = /* provide a valid signer */;
  //     const route = /* provide a valid route */;

  //     const result = await service.resumeSwap(signer, route);

  //     expect(result.val).toEqual(expect.any(Object));
  //     expect(result.error).toBe("");
  //   });

  //   test('should handle errors and return null with an error message', async () => {
  //     const invalidSigner = /* provide an invalid signer */;
  //     const invalidRoute = /* provide an invalid route */;

  //     const result = await service.resumeSwap(invalidSigner, invalidRoute);

  //     expect(result.val).toBeNull();
  //     expect(result.error).toEqual(expect.any(String));
  //   });

  // });

  // describe('fiatToCrypto', () => {
  //   it("should create new market order and execute", async () => { 
  //     const amount = 1;
  //     const token = 'MATIC';
  //     const result = await service.fiatToCrypto(amount, token);
  //   })
  // });
});