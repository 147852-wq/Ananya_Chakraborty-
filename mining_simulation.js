: Simulate Proof-of-Work by mining a block that satisfies a difficulty condition.
import hashlib
import time

def mine_block(data, previous_hash, difficulty):
    nonce = 0
    prefix = '0' * difficulty
    print(f"Mining block with difficulty: {difficulty} (hash prefix = {prefix})")
    start_time = time.time()

    while True:
        # Prepare the block content string
        block_content = f"{data}{previous_hash}{nonce}"
        block_hash = hashlib.sha256(block_content.encode()).hexdigest()
        
        # Check if hash meets difficulty criteria
        if block_hash.startswith(prefix):
            elapsed_time = time.time() - start_time
            print(f"Block mined!")
            print(f"Nonce: {nonce}")
            print(f"Hash: {block_hash}")
            print(f"Time taken: {elapsed_time:.2f} seconds")
            return nonce, block_hash
        nonce += 1

# Example usage:
data = "Sample transaction data"
previous_hash = "000000abc123"
difficulty = 4  # Number of leading zeros required

mine_block(data, previous_hash, difficulty)
 Modify your Block class to include a mineBlock(difficulty) function 
import hashlib
import time

class Block:
    def __init__(self, data, previous_hash=''):
        self.data = data
        self.previous_hash = previous_hash
        self.timestamp = time.time()
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_content = f"{self.data}{self.previous_hash}{self.timestamp}{self.nonce}"
        return hashlib.sha256(block_content.encode()).hexdigest()

    def mineBlock(self, difficulty):
        print(f"⛏️  Mining block with difficulty {difficulty}...")
        prefix = '0' * difficulty

        while not self.hash.startswith(prefix):
            self.nonce += 1
            self.hash = self.calculate_hash()

        print(f"✅ Block mined: {self.hash}")
        print(f"Nonce used: {self.nonce}\n")

# Example usage:
if __name__ == "__main__":
    genesis_block = Block("Genesis Block", "0")
    genesis_block.mineBlock(difficulty=4)

    block2 = Block("Block 2 data", genesis_block.hash)
    block2.mineBlock(difficulty=4)
Set difficulty (e.g., hash must start with "0000") 
import hashlib
import time

class Block:
    def __init__(self, data, previous_hash=''):
        self.data = data
        self.previous_hash = previous_hash
        self.timestamp = time.time()
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        content = f"{self.data}{self.previous_hash}{self.timestamp}{self.nonce}"
        return hashlib.sha256(content.encode()).hexdigest()

    def mine_block(self, difficulty_prefix):
        print(f"⛏️ Mining block until hash starts with '{difficulty_prefix}'...")
        while not self.hash.startswith(difficulty_prefix):
            self.nonce += 1
            self.hash = self.calculate_hash()
        print(f"✅ Block mined! Hash: {self.hash}")
        print(f"Nonce: {self.nonce}\n")

# Example usage:
if __name__ == "__main__":
    difficulty = "0000"  # Hash must start with this prefix
    genesis = Block("Genesis block data", "0")
    genesis.mine_block(difficulty)

    block2 = Block("Second block data", genesis.hash)
    block2.mine_block(difficulty)
✅ What’s changed?
mine_block(difficulty_prefix) now takes any string (e.g., "0000" or "000abc") for more precise control.

The block is mined only when the hash starts with that string.
 In mineBlock(), repeatedly increment the nonce until the hash meets the difficulty 
condition 
import hashlib
import time

class Block:
    def __init__(self, data, previous_hash=''):
        self.data = data
        self.previous_hash = previous_hash
        self.timestamp = time.time()
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self):
        block_string = f"{self.data}{self.previous_hash}{self.timestamp}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

    def mineBlock(self, difficulty_prefix="0000"):
        print(f"⛏️ Mining block until hash starts with '{difficulty_prefix}'...")
        while not self.hash.startswith(difficulty_prefix):
            self.nonce += 1
            self.hash = self.calculate_hash()
        print(f"✅ Block mined successfully!")
        print(f"Hash: {self.hash}")
        print(f"Nonce: {self.nonce}\n")

# Example usage
if __name__ == "__main__":
    # Set the difficulty (prefix the hash must start with)
    difficulty = "0000"

    # Create and mine the genesis block
    genesis_block = Block("Genesis Block", "0")
    genesis_block.mineBlock(difficulty)

    # Create and mine the second block
    block2 = Block("Block 2 Data", genesis_block.hash)
    block2.mineBlock(difficulty)

          
