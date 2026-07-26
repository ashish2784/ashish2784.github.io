import unittest

from backend.portfolio_logic import get_portfolio_response


class PortfolioLogicTests(unittest.TestCase):
    def test_summary_response_contains_profile_highlights(self):
        response = get_portfolio_response("tell me about ashish", "Ashish T is a data scientist focused on AI and full-stack development.")
        self.assertIn("Ashish", response)
        self.assertIn("AI", response)

    def test_capability_response_lists_capabilities(self):
        response = get_portfolio_response("what can you do", "")
        self.assertIn("AI", response)
        self.assertIn("projects", response.lower())


if __name__ == "__main__":
    unittest.main()
