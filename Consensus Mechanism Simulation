: Simulate and compare PoW, PoS, and DPoS logic in code. 
import hashlib
import time
import random

class PoWBlock:
    def __init__(self, data, difficulty="0000"):
        self.data = data
        self.nonce = 0
        self.difficulty = difficulty
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        return hashlib.sha256(f"{self.data}{self.nonce}".encode()).hexdigest()

    def mine(self):
        attempts = 0
        start = time.time()
        while not self.hash.startswith(self.difficulty):
            self.nonce += 1
            self.hash = self.calculate_hash()
            attempts += 1
        end = time.time()
        return attempts, end - start, self.hash
Proof of Stake (PoS) — Simulated with weighted random selection
class PoSNetwork:
    def __init__(self, stakers):
        self.stakers = stakers  # {"Alice": 50, "Bob": 30, "Carol": 20}

    def select_validator(self):
        total = sum(self.stakers.values())
        rand = random.uniform(0, total)
        current = 0
        for user, stake in self.stakers.items():
            current += stake
            if current >= rand:
                return user
class DPoSNetwork:
    def __init__(self, votes):
        self.votes = votes  # {"Alice": 100, "Bob": 80, "Carol": 60, "Dave": 40}
        self.delegates = self.select_top_delegates(2)  # Top 2 vote-getters
        self.turn = 0

    def select_top_delegates(self, count):
        sorted_delegates = sorted(self.votes.items(), key=lambda x: x[1], reverse=True)
        return [d[0] for d in sorted_delegates[:count]]

    def get_next_validator(self):
        validator = self.delegates[self.turn % len(self.delegates)]
        self.turn += 1
        return validator
 Simulation Runner
def simulate():
    print("=== Proof of Work ===")
    block = PoWBlock("Transaction data", difficulty="0000")
    attempts, time_taken, block_hash = block.mine()
    print(f"Hash: {block_hash}")
    print(f"Attempts: {attempts}, Time: {time_taken:.2f}s\n")

    print("=== Proof of Stake ===")
    stakers = {"Alice": 50, "Bob": 30, "Carol": 20}
    pos = PoSNetwork(stakers)
    validator = pos.select_validator()
    print(f"Selected Validator: {validator}\n")

    print("=== Delegated Proof of Stake ===")
    votes = {"Alice": 100, "Bob": 80, "Carol": 60, "Dave": 40}
    dpos = DPoSNetwork(votes)
    for i in range(3):
        print(f"Round {i+1} Validator: {dpos.get_next_validator()}")

simulate()
 Output (Sample):
=== Proof of Work ===
Hash: 0000a3b5d1e4...
Attempts: 11456, Time: 0.65s

=== Proof of Stake ===
Selected Validator: Alice

=== Delegated Proof of Stake ===
Round 1 Validator: Alice
Round 2 Validator: Bob
Round 3 Validator: Alice
✅ Summary:
Mechanism	Selection Logic	Energy Use	Speed
PoW	Puzzle Solving (hash)	High	Slow
PoS	Random by Stake Weight	Low	Fast
DPoS	Voted Delegates (round robin)	Low	Very Fast
