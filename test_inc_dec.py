import unittest
from inc_dec import increment, decrement

class TestIncDec(unittest.TestCase):
    def test_increment(self):
        self.assertEqual(increment(3), 4)
        self.assertEqual(increment(-1), 0)
        self.assertEqual(increment(0), 1)

    def test_decrement(self):
        self.assertEqual(decrement(3), 2)
        self.assertEqual(decrement(-1), -2)
        self.assertEqual(decrement(0), -1)

if __name__ == '__main__':
    unittest.main()
